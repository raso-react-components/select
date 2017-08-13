export default function createInputValue(value, { backfill = false } = {}) {
  return {
    value,

    backfill,

    isEmpty() {
      return !value;
    },

    isEqual(other) {
      return other && value === other.value;
    },
  };
}
