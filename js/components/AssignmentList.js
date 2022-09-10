import Assignment from "./Assignment.js";
import AssignmentTag from "./AssignmentTag.js";

export default {
    template: `
      <div class="text-gray-700">
      <section v-if="assignments.length" class="border mb-6 rounded-lg px-3">
        <div class="flex justify-between">
          <h1 class="text-2xl">{{ title }} ({{ assignments.length }})</h1>
          <span v-if="canToggle" @click="$emit('toggle')" class="hover:cursor-pointer">&times;</span>
        </div>

        <assignment-tag
            :initial-tags="assignments.map(a => a.tag)"
            v-model:currentTag="currentTag"/>
        <ul>
          <assignment v-for="assignment in filteredAssignments"
                      :key="assignment.id"
                      :assignment="assignment"/>
        </ul>
      </section>
      <slot/>
      </div>
    `,
    components: {Assignment, AssignmentTag},
    props: {assignments: Array, title: String, canToggle: {type: Boolean, default: false}},
    data() {
        return {
            currentTag: 'all'
        }
    },
    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag)
        }
    }
}