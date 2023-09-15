const LoginFetchRequest = async (userData) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
  
    try {
      const response = await fetch(
        'https://itransition-diplom-forum-node-600c7875a052.herokuapp.com/auth/login',
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return response.json(); // Return the JSON response
    } catch (error) {
      throw error; // Rethrow the error for the calling code to handle
    }
  };
  
  export default LoginFetchRequest;
  