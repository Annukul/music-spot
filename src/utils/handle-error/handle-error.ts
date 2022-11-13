export const getErrorAndStatusFromErr = (err: any) => {
  if (err?.response?.data) {
    if (err?.response?.data?.error) {
      const {
        response: {
          data: { status, error },
        },
      } = err;
      return { message: error, status: status };
    } else if (
      err?.response?.data?.message &&
      err?.response?.data?.code &&
      err?.response?.data?.errorIdentifiers
    ) {
      const {
        response: {
          data: { message, errorIdentifiers },
          status,
        },
      } = err;
      return { message, status, errorIdentifiers };
    } else if (err?.response?.data?.message && err?.response?.data?.code) {
      const {
        response: {
          data: { message },
          status,
        },
      } = err;
      return { message, status };
    }
    const {
      response: {
        data: { statusText, status },
      },
    } = err;
    return { statusText, status };
  } else {
    return { message: "Unknown Error, Please Contact Developers!", status: "" };
  }
};
