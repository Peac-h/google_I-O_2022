import "./LanguageDropdown.css";

const LanguageDropdown = (props: { className?: string }) => (
  <select
    name="language-dropdown"
    className={`language-dropdown ${props.className}`}
    defaultValue="en"
  >
    {[
      { abb: "en", lang: "English" },
      { abb: "es", lang: "Español" },
      { abb: "pt", lang: "Português" },
      { abb: "fr", lang: "Français" },
      { abb: "id", lang: "Indonesia" },
      { abb: "ko", lang: "한국어" },
      { abb: "zh", lang: "中文" },
      { abb: "ja", lang: "日本語" },
    ].map((option, i) => (
      <option value={option.abb} key={i}>
        {option.lang}
      </option>
    ))}
  </select>
);

export default LanguageDropdown;
