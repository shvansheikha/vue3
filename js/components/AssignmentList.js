import Assignment from "./Assignment.js";
import AssignmentTag from "./AssignmentTag.js";

export default {
    template: `
      <div class="text-gray-700">
      <section v-if="assignments.length" class="border mb-6 rounded-lg px-3">
        <h1 class="text-2xl">{{ title }} ({{ assignments.length }})</h1>

        <assignment-tag
            :initial-tags="assignments.map(a => a.tag)"
            :current-tag="currentTag"
            @change="currentTag = $event"
        />

        <ul>
          <assignment v-for="assignment in filteredAssignments"
                      :key="assignment.id"
                      :assignment="assignment"/>
        </ul>
      </section>
      </div>
    `,
    components: {Assignment, AssignmentTag},
    props: {assignments: Array, title: String},
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