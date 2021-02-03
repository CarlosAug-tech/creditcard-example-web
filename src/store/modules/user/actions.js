export function profileUpdateRequest(data) {
  return {
    type: '@user/PROFILE_UPDATE_REQUEST',
    payload: { data },
  };
}

export function profileUpdateSuccess(user) {
  return {
    type: '@user/PROFILE_UPDATE_SUCCESS',
    payload: { user },
  };
}

export function profileFailure() {
  return {
    type: '@user/PROFILE_FAILURE',
  };
}
