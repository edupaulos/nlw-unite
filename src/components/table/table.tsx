import { ComponentProps } from "react";

interface TableProsps extends ComponentProps<"table"> {}

export const Table = (props: TableProsps) => {
  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full" {...props} />;
    </div>
  );
};
