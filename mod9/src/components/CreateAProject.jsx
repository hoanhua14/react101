export default function CreateAProject() {
  return (
    <form>
      <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
        Save
      </button>
      <label className="text-sm font-bold uppercase text-stone-500">
        Title
      </label>
      <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
      <label className="text-sm font-bold uppercase text-stone-500">
        Description
      </label>
      <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></input>
      <label className="text-sm font-bold uppercase text-stone-500">
        Due date
      </label>
      <input
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        type="date"
      ></input>
    </form>
  );
}
