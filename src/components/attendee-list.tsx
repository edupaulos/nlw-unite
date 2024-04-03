import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";

const AttendeeList: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10  rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
            placeholder="Buscar participantes"
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className="w-full ">
          <tr className="border-b border-white/10">
            <th style={{ width: 64 }} className="py-3 px-4 text-sm  text-left">
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10"
              ></input>
            </th>
            <th className="py-3 px-4 text-sm text-left">Código</th>
            <th className="py-3 px-4 text-sm text-left">Paticipante</th>
            <th className="py-3 px-4 text-sm text-left">Data de inscrição</th>
            <th className="py-3 px-4 text-sm text-left">Data do check-in</th>
            <th
              style={{ width: 64 }}
              className="py-3 px-4 text-sm text-left"
            ></th>
          </tr>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr
                key={index}
                className="border-b border-white/10 hover:bg-white/5"
              >
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10"
                  />
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">123</td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">Eduardo</span>
                    <span>tes@email.com</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  4 dias atrás
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  4 dias atrás
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal className="size-4"></MoreHorizontal>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-left" colSpan={3}>
                Mostrando 10 de 228 itens
              </td>
              <td className="py-3 px-4 text-sm text-right" colSpan={3}>
                <div className="inline-flex items-center gap-8 ">
                  <span>Página 1 de 23</span>
                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronRight className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AttendeeList;
