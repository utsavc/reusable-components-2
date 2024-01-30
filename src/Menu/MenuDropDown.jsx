import Toggle from "../Toggle/Toggle";

export default function MenuDropDown({ children }) {
  return (
    <>
      <Toggle.On>
        <div className="menu-dropdown">{children}</div>
      </Toggle.On>
    </>
  );
}
