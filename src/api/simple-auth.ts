export const loginApi = async (
  username: string,
  password: string
): Promise<boolean> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate a successful login for demo purposes
  if (username === "demo" && password === "password") {
    return true;
  }

  return false;
};
