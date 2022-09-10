export default {
    template: `
      <li class="flex justify-between items-center w-60">
      <label>{{ assignment.name }} <span class="text-xs">({{ assignment.tag }})</span></label>
      <input class="mx-4" type="checkbox" v-model="assignment.complete">
      </li>
    `,
    props: {assignment: Object}
}