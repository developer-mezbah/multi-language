"use client"
import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import Script from "next/script";

const GoogleTranslate = () => {
  const [selected, setSelected] = useState(null);

  const languages = [
    { label: "English", value: "/auto/en" },
    { label: `Русский`, value: "/auto/ru" },
    { label: "Polski", value: "/auto/pl" },
  ];

  useEffect(() => {
    if (hasCookie("googtrans")) {
      setSelected(getCookie("googtrans"));
    } else {
      setSelected("/auto/en");
    }
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);

    const googleTranslateElementInit = () => {
      return new window.google.translate.TranslateElement(
        {
          pageLanguage: "auto",
          autoDisplay: true,
          includedLanguages: "ru,en,pl,bn", // If you remove it, by default all google supported language will be included
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const langChange = (e, m, evt) => {
    evt.preventDefault();
    if (hasCookie("googtrans")) {
      setCookie("googtrans", decodeURI(e));
      setSelected(e);
    } else {
      setCookie("googtrans", e);
      setSelected(e);
    }
    window.location.reload();
  };

  return (
    <div>
      <div
        id="google_translate_element"
        style={{
          width: "0px",
          height: "0px",
          position: "absolute",
          left: "0%",
          bottom: "0%"
        //   zIndex: -99999,
        }}
      ></div>
      <SelectPicker
        data={languages}
        style={{ width: 0 }}
        placement="bottomEnd"
        cleanable={false}
        value={selected}
        searchable={false}
        className={"notranslate"}
        menuClassName={"notranslate"}
        onSelect={(e, m, evt) => langChange(e, m, evt)}
        placeholder="Lang"
      />
    </div>
  );
};

export default GoogleTranslate;
