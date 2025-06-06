import { useId } from "react";

const LangSwitcher = ({ value, onSelect }) => {
  //   const selectId = useId();
  //   return (
  //     <div>
  //       <label htmlFor={selectId}>Choose language</label>
  //       <select id={selectId}>
  //         <option value="en">English</option>
  //         <option value="uk">Ukrainian</option>
  //         <option value="pl">Polish</option>
  //       </select>
  //     </div>
  //   );
  const selectId = useId();
  //   const [lang, setLang] = useState("uk");

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
