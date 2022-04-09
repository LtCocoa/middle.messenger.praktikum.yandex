import { Action } from '../utils/store';
import { ChatsData } from '../api/ChatsAPI';

const SET_CHAT = 'chat/SET';
const UNSET_CHAT = 'chat/UNSET';
const SET_ERROR = 'chat/SET_ERROR';
const SET_MESSAGES = 'chat/SET_MESSAGES';
const ADD_MESSAGE = 'chat/ADD_MESSAGE';

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

export default (state = {
  chatData: null,
  error: null,
  messages: []
}, action: Action) => {
  switch (action.type) {
    case SET_CHAT:
      return {
        error: null,
        chatData: action.payload,
        messages: []
      };
    case UNSET_CHAT:
      return {
        chatData: null,
        error: null,
        messages: []
      };
    case SET_ERROR:
      return {
        error: action.payload,
        chatData: null,
        messages: []
      };
    case SET_MESSAGES:
      return {
        error: null,
        chatData: state.chatData,
        messages: action.payload
      };
    case ADD_MESSAGE:
      return {
        error: null,
        chatData: state.chatData,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
};
