import Assignment from "./Assignment.js";
import AssignmentTag from "./AssignmentTag.js";
import Panel from "./Panel.js";

export default {
    template: `
      <panel v-if="assignments.length" class="w-80">
        <div class="flex justify-between">
          <h1 class="text-2xl">{{ title }} ({{ assignments.length }})</h1>
          <span v-if="canToggle" @click="$emit('toggle')" class="hover:cursor-pointer">&times;</span>
        </div>

        <assignment-tag
            :initial-tags="assignments.map(a => a.tag)"
            v-model:currentTag="currentTag"/>
        <ul class="divide-y border rounded divide-gray-500 border-gray-500">
          <assignment v-for="assignment in filteredAssignments"
                      :key="assignment.id"
                      :assignment="assignment"/>
        </ul>

        <slot/>
      </panel>
      
    `,
    components: {Assignment, AssignmentTag,Panel},
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