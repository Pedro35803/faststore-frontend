export const getCsvHeaders = (file: File): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        if (!text) return resolve([]);

        const firstLine = text.split(/\r?\n/)[0];

        const separator = firstLine.includes(";") ? ";" : ",";

        const columns = firstLine
          .split(separator)
          .map((h) => h.trim())
          .filter(Boolean);

        resolve(columns);
      } catch (err) {
        reject(err);
      }
    };

    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
};
