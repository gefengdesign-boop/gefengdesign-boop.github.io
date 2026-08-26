/* Pure quiz helpers. Kept separate so the same rules can be checked outside the browser. */
(function (global) {
  function normalizeAnswer(value) {
    return String(value ?? "")
      .toLocaleLowerCase("en-US")
      .replace(/[“”‘’'"`.,!?;:()[\]{}]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  function isCorrect(userAnswer, entry, direction = "english_to_chinese") {
    const primary = direction === "chinese_to_english" ? entry.answer : entry.meaning;
    const aliases = direction === "chinese_to_english" ? (entry.aliases || []) : (entry.meaningAliases || []);
    const accepted = [primary, ...aliases].map(normalizeAnswer).filter(Boolean);
    return accepted.includes(normalizeAnswer(userAnswer));
  }
  function errorAnalysis(entry) {
    if (entry.subject === "math") return "这是数学题目中的指令或概念词，先判断题目要求你做什么，再记住它的含义。";
    if (entry.subject === "reading") return "阅读词汇不能只背一个中文意思，要把它放回上下文，观察它和前后句的关系。";
    return "语言运用词要结合它在句子中的功能，先判断它承担什么作用，再记住拼写和规则。";
  }
  function resultMessage(score, total) {
    const accuracy = total ? score / total : 0;
    if (accuracy === 1) return "太棒了！这组词汇已经掌握得很稳。";
    if (accuracy >= 0.8) return "很接近稳定掌握，再复习几个错题就更好了。";
    if (accuracy >= 0.6) return "你已经建立了基础，下一轮会更轻松。";
    return "这次是摸底，不是失败。先复习错题，再挑战一次。";
  }
  global.MapQuizCore = { normalizeAnswer, isCorrect, errorAnalysis, resultMessage };
})(typeof window !== "undefined" ? window : globalThis);
