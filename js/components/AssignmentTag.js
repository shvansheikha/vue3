export default {
    template: `
      <div class="flex gap-3 mt-2 mb-3">
      <button
          @click="$emit('change', tag)"
          v-for="tag in tags"
          class="border px-1 rounded text-sm"
          :class="{'border-blue-500 text-blue-500':tag === currentTag}">
        {{ tag }}
      </button>
      </div>
    `,
    props: {initialTags: Array, currentTag: String},
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)]
        }
    }
}