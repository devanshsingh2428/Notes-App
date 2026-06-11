
import { useState } from "react";
import { Trash } from "lucide-react";

export default function App() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !detail.trim()) return;

    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);

    setTitle("");
    setDetail("");
  };

  const deleteTask = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen lg:h-screen lg:flex bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* Left Section */}

      <form
        onSubmit={submitHandler}
        className="lg:w-1/2 flex flex-col justify-center gap-5 p-10"
      >
        <div>
          <h1 className="text-5xl font-bold">Notes App</h1>
          <p className="text-slate-400 mt-3">
            Organize your ideas in one place.
          </p>
        </div>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="
          w-full
          rounded-xl
          bg-slate-800
          border
          border-slate-700
          px-5
          py-3
          outline-none
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500
          transition
          "
        />

        <textarea
          placeholder="Enter Details"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="
          w-full
          h-36
          rounded-xl
          bg-slate-800
          border
          border-slate-700
          px-5
          py-3
          outline-none
          resize-none
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500
          transition
          "
        />

        <button
          className="
          w-full
          py-3
          rounded-xl
          font-semibold
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          hover:from-indigo-600
          hover:to-blue-700
          active:scale-95
          transition
          "
        >
          Add Note
        </button>
      </form>

      {/* Right Section */}

      <div className="lg:w-1/2 lg:border-l border-slate-700 overflow-auto p-10">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            Recent Notes
          </h1>

          <span className="text-slate-400">
            {task.length} Notes
          </span>
        </div>

        {task.length === 0 ? (
          <div className="h-[60vh] flex justify-center items-center">
            <p className="text-slate-500 text-xl">
              Add your first note.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6">

            {task.map((elem, idx) => {

              return (

                <div
                  key={idx}
                  className="
                  h-60
                  w-48
                  rounded-3xl
                  bg-slate-800/80
                  border
                  border-slate-700
                  backdrop-blur-md
                  shadow-xl
                  hover:-translate-y-2
                  hover:shadow-blue-900/30
                  transition-all
                  duration-300
                  flex
                  flex-col
                  "
                >

                  <div
                    className="
                    h-12
                    px-4
                    border-b
                    border-slate-700
                    flex
                    justify-between
                    items-center
                    "
                  >

                    <h3 className="font-semibold text-lg truncate">
                      {elem.title}
                    </h3>

                    <Trash
                      size={18}
                      onClick={() => deleteTask(idx)}
                      className="
                      cursor-pointer
                      text-red-400
                      hover:text-red-500
                      hover:scale-110
                      transition
                      "
                    />

                  </div>

                  <div className="flex-1 overflow-auto p-3 scrollbar-none">

                    <p className="text-sm leading-6 text-slate-300 break-words">
                      {elem.detail}
                    </p>

                  </div>

                </div>

              );
            })}

          </div>
        )}
      </div>
    </div>
  );
}
