import Toggle from "../Toggle/Toggle"

export default function Menu({ children,onOpen }) {
  return (
    <Toggle onToggle={onOpen}>
      <div>{children}</div>
    </Toggle>
  );
}
