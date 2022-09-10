export default {
    template: `
      <form @submit.prevent="add">
      <div class="border rounded-lg pl-3">
        <input type="text" v-model="newAssignment" class="px-1 py-1 focus:outline-none">
        <button type="submit" class="px-2 py-1 border-l text-center hover:bg-gray-200">Add</button>
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