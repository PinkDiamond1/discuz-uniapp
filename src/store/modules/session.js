/* eslint no-underscore-dangle: ["error", { "allow": ["_jv"] }] */
import { http } from '@/api/api-request';
import { utils } from '@/library/jsonapi-vuex/index';
import { DISCUZ_REQUEST_HOST } from '@/common/const';
import {
  SET_USER_ID,
  CHECK_SESSION,
  SET_ACCESS_TOKEN,
  SET_AUTH,
  SET_PARAMS,
  SET_CATEGORYID,
  SET_CATEGORYINDEX,
  DELETE_USER_ID,
  DELETE_ACCESS_TOKEN,
} from '@/store/types/session';
import { i18n } from '@/locale';

const accessToken = uni.getStorageSync('access_token');

const setUserInfoStore = (context, results, resolve) => {
  const resData = utils.jsonapiToNorm(results.data.data);
  context.commit(SET_USER_ID, resData._jv.id);
  context.commit(CHECK_SESSION, true);
  context.commit(SET_ACCESS_TOKEN, resData.access_token);
  uni.$emit('logind');
  resolve(resData);
};

const state = {
  userId: 0,
  wxLogin: false,
  accessToken,
  auth: {},
  categoryId: 0,
  categoryIndex: 0,
};

const actions = {
  /**
   * 设置用户ID
   */
  setUserId: (context, payload) => {
    context.commit(SET_USER_ID, payload);
  },
  checkSession: (context, payload) => {
    context.commit(CHECK_SESSION, payload);
  },
  setAccessToken: (context, payload) => {
    context.commit(SET_ACCESS_TOKEN, payload);
  },
  setAuth: (context, payload) => {
    context.commit(SET_AUTH, payload);
  },
  setParams: (context, payload) => {
    context.commit(SET_PARAMS, payload);
  },
  // #ifdef MP-WEIXIN
  noSenseMPLogin: (context, payload = {}) => {
    return new Promise(resolve => {
      return http
        .post('oauth/wechat/miniprogram', payload)
        .then(results => {
          resolve(results);
          setUserInfoStore(context, results, resolve);
        })
        .catch(err => resolve(err));
    });
  },
  // #endif
  // #ifdef H5
  wxh5Login: (context, payload = {}) => {
    console.log(payload);
    const url = encodeURIComponent(`${DISCUZ_REQUEST_HOST}pages/user/wechat`);
    window.location = `${DISCUZ_REQUEST_HOST}api/oauth/wechat?redirect=${url}`;
  },
  // #endif
  // #ifdef H5
  noSenseh5Login: (context, payload = {}) => {
    let inviteCode = '';
    uni.getStorage({
      key: 'inviteCode',
      success(resData) {
        inviteCode = resData.data || '';
      },
    });
    const options = { custom: { showTost: false } };
    return new Promise(resolve => {
      return http
        .get(
          `oauth/wechat/user?sessionId=${payload.sessionId}&code=${payload.code}&state=${payload.state}&inviteCode=${inviteCode}`,
          options,
        )
        .then(results => {
          resolve(results);
          setUserInfoStore(context, results, resolve);
        })
        .catch(error => {
          resolve(error);
        });
    });
  },
  // #endif
  verificationCodeh5Login: (context, payload = {}) => {
    return new Promise(resolve => {
      return http
        .post('sms/verify', payload)
        .then(results => setUserInfoStore(context, results, resolve));
    });
  },
  h5Login: (context, payload = {}) => {
    return new Promise(resolve => {
      return http
        .post('login', payload)
        .then(results => {
          resolve(results);
          setUserInfoStore(context, results, resolve);
        })
        .catch(error => {
          if (error && error.data && error.data.errors && error.data.errors[0].status === '403') {
            uni.showToast({
              icon: 'none',
              title: error.data.errors[0].detail[0],
              duration: 2000,
            });
          }
          if (
            error &&
            error.data &&
            error.data.errors &&
            error.data.errors[0].code === 'register_validate'
          ) {
            uni.showToast({
              icon: 'none',
              title: i18n.t('core.register_validate'),
              duration: 2000,
            });
          }
        });
    });
  },
  h5Register: (context, payload = {}) => {
    const options = { custom: { showTost: false } };
    return new Promise(resolve => {
      return http
        .post('register', payload, options)
        .then(results => {
          resolve(results);
          setUserInfoStore(context, results, resolve);
        })
        .catch(err => resolve(err));
    });
  },
  logout: context => {
    return new Promise(resolve => {
      context.commit(DELETE_USER_ID);
      context.commit(DELETE_ACCESS_TOKEN);
      resolve();
    });
  },
};

const mutations = {
  [SET_USER_ID](state, payload) {
    uni.setStorageSync('user_id', payload);
    state.userId = payload;
  },
  [CHECK_SESSION](state, payload) {
    state.wxLogin = payload;
  },
  [SET_ACCESS_TOKEN](state, payload) {
    uni.setStorageSync('access_token', payload);
    state.accessToken = payload;
  },
  [SET_AUTH](state, payload) {
    state.auth = payload;
  },
  [SET_PARAMS](state, payload) {
    state.params = payload;
  },
  [SET_CATEGORYID](state, payload) {
    state.categoryId = payload;
  },
  [SET_CATEGORYINDEX](state, payload) {
    state.categoryIndex = payload;
  },
  [DELETE_USER_ID](state) {
    uni.removeStorageSync('user_id');
    state.userId = 0;
  },
  [DELETE_ACCESS_TOKEN](state) {
    uni.removeStorageSync('access_token');
    state.accessToken = '';
  },
};

const getters = {
  get: state => {
    return data => {
      switch (data) {
        case 'userId':
          state.userId = uni.getStorageSync('user_id') || 0;
          return state.userId;
        case 'isWxLogin':
          return state.wxLogin;
        case 'isLogin':
          return !!uni.getStorageSync('access_token');
        default:
          return state[data];
      }
    };
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
