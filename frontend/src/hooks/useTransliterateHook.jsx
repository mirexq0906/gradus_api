
export function useTransliterateHook(initialValue = "") {

  const map = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ы: "y",
    э: "e",
    ю: "yu",
    я: "ya",
    ' ': "_",
  };

  const sanitizedValue = initialValue.replace(/[ъь]/g, '');

  let result = "";
  for (let i = 0; i < sanitizedValue.length; i++) {
    const letter = sanitizedValue[i].toLowerCase();
    result += map[letter] || letter;
  }
  return result;
}
