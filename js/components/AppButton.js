export default {
    template: `
      <button class="bg-gray-200 hover:bg-gray-400 border px-4 py-2 rounded"
              :disabled="!processing">
      <slot/>
      </button>
    `,
    data() {
        return {
            processing: true
        };
    }
}