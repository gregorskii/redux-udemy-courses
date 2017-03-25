export const CHANGE_APP_CONFIG = 'CHANGE_APP_CONFIG';

export function changeAppConfig(newConfig) {
  return {
    type: CHANGE_APP_CONFIG,
    payload: newConfig
  };
}
