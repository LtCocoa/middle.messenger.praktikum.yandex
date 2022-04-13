import { Action } from '../utils/store';
import { ChatsData } from '../api/ChatsAPI';
import { UserData } from '../api/AuthAPI';


const SET_CHAT = 'chat/SET';
const UNSET_CHAT = 'chat/UNSET';
const SET_ERROR = 'chat/SET_ERROR';
const SET_MESSAGES = 'chat/SET_MESSAGES';
const ADD_MESSAGE = 'chat/ADD_MESSAGE';
const SET_USERS = 'chat/SET_USERS';

export const setChat = (chat: ChatsData) => ({
  type: SET_CHAT,
  payload: chat,
});

export const unsetChat = () => ({
  type: UNSET_CHAT,
});

export const setError = (error: { reason: string }) => ({
  type: SET_ERROR,
  payload: error,
});

export const setMessages = (messages: Array<any>) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const addMessage = (message: any) => ({
  type: ADD_MESSAGE,
  payload: message
});

export const setChatUsers = (users: UserData) => ({
  type: SET_USERS,
  payload: users
});

export default (state = {
  chatData: null,
  messages: [],
  chatUsers: [],
  error: null,
}, action: Action) => {
  switch (action.type) {
    case SET_CHAT:
      return {
        error: null,
        chatData: action.payload,
        messages: [],
        chatUsers: [],
      };
    case UNSET_CHAT:
      return {
        chatData: null,
        error: null,
        messages: [],
        chatUsers: [],
      };
    case SET_ERROR:
      return {
        error: action.payload,
        messages: [],
        chatUsers: [],
        chatData: null,
      };
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        error: null,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        error: null,
      };
    case SET_USERS:
      return {
        ...state,
        chatUsers: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
