export function RedButton({text}:{text:string}) {
  return (
    <button 
    className="bg-red text-white px-4 py-1 rounded-md
    hover:bg-red-dark
    ">{text}</button>
  );
}