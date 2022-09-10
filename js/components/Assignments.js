import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    template: `
      <div class="flex gap-8">
      <assignment-list :assignments="filters.inProgress" title="In Progress">
        <assignment-create @add="add"></assignment-create>
      </assignment-list>
      <assignment-list
          v-if="showCompleted"
          :assignments="filters.completed"
          can-toggle
          title="Completed"
          @toggle="showCompleted= !showCompleted"
      />
      </div>
    `,
    components: {AssignmentList, AssignmentCreate},

    data() {
        return {
            newAssignment: "",
            assignments: [],
            showCompleted: true,
            tags: ["math", "science", "arch"]
        }
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            })
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete),
            }
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1,
                tag: this.tags[this.random()]
            });
        },
        random() {
            return Math.floor(Math.random() * 2);
        },
    }
}