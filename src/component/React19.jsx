import { useActionState , startTransition } from "react";

function React19(){
  const [error, submitAction, isPending] = useActionState(
    async (prevState, newName) => {
      try {
        const response = await updateNameOnServer(newName); // Call API
        if (!response.ok) {
          // Return an error message if the request fails
          return 'Failed to update the name!';
        }
        return "Success";  // Return null on success
      } catch (err) {
        return 'An unexpected error occurred!';
      } // how do u show if error occurred 
    },
    null, // Initial state
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newName = e.target.elements.name.value;
    startTransition(() =>submitAction(newName))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Enter a new name" />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

async function updateNameOnServer(name) {
  return new Promise((resolve) => setTimeout(() => resolve({ ok: true }), 2000));
}


export default React19;