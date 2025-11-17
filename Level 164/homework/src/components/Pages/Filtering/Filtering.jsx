import Filter from "./Filter";
import CardTable from "./CardTable";
function Filtering() {
  return (
    <main className="w-full flex gap-15 px-[100px] max-sm:flex-col max-sm:justify-center imax-sm:tems-center">
      <Filter />
      <CardTable />
    </main>
  );
}
export default Filtering;
