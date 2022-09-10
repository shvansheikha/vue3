export default {
    template: `
      <li class="flex justify-between items-center">
      <label>{{ assignment.name }} <span class="text-xs">({{ assignment.tag }})</span></label>
      <input class="mx-4" type="checkbox" v-model="assignment.complete">
      
      </li>
    `,
    props: {assignment: Object}
}