
export async function createUser(auth: unknown) {
  try {
      const response = await fetch('/api/post-new-user', {
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