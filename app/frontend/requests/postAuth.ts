export async function postAuth(auth: unknown) {
  try {
      const response = await fetch('/api/post-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(auth),
      });
      if (!response.ok) throw new Error("Data didn't fetch");
      console.log(response.json());
    } catch (error) {
      console.log(error);
    }
}