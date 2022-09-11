export default {
    template: `
      <form @submit.prevent="add">
      <div class="flex justify-between mt-6 border rounded-lg pl-3 text-gray-700 bg-gray-50">
        <input type="text"
               v-model="newAssignment"
               placeholder="write something..."
               class="px-1 py-1 focus:outline-none">
        <button type="submit" class="px-2 py-1 mr-4 border-l text-center hover:bg-gray-300">Add</button>
      </div>
      </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}