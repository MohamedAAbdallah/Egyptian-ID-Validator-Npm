const governorates = {
  1: "Cairo",
  2: "Alexandria",
  3: "Port Said",
  4: "Suez",
  11: "Damietta",
  12: "Dakahlia",
  13: "Sharqia",
  14: "Qalyubia",
  15: "Kafr El Sheikh",
  16: "Gharbia",
  17: "Monufia",
  18: "Beheira",
  19: "Ismailia",
  21: "Giza",
  22: "Beni Suef",
  23: "Faiyum",
  24: "Minya",
  25: "Asyut",
  26: "Sohag",
  27: "Qena",
  28: "Aswan",
  29: "Luxor",
  31: "Red Sea",
  32: "New Valley",
  33: "Matruh",
  34: "North Sinai",
  35: "South Sinai",
  88: "Foreigners",
};

function validateChecksum(id) {
  const weights = [2, 7, 6, 5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += Number(id[i]) * weights[i];
  }
  let k = 11 - (sum % 11);
  k = k === 10 ? 0 : k === 11 ? 1 : k;
  return k === Number(id[13]);
}

export function validate(id) {
  if (typeof id !== "string" && typeof id !== "number") return null;
  id = String(id).trim();
  if (!/^\d{14}$/.test(id)) return null;

  if (!validateChecksum(id)) return null;

  const pattern =
    /^(?<century>[23])(?<year>\d{2})(?<month>0[1-9]|1[0-2])(?<day>0[1-9]|[12]\d|3[01])(?<gov>0[1-9]|[1-3]\d|88)(?<unique>\d{3})(?<gender>\d)(\d)$/;
  const m = id.match(pattern);
  if (!m || !m.groups) return null;

  const { century, year, month, day, gov, gender } = m.groups;
  const fullYear = (century === "2" ? 1900 : 2000) + parseInt(year);
  const govName = governorates[parseInt(gov)];
  if (!govName) return null;

  return {
    valid: true,
    year: String(fullYear),
    month,
    day,
    governorate: govName,
    gender: Number(gender) % 2 ? "M" : "F",
  };
}
