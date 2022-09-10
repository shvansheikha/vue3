import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
import json from '../note.json' assert {type: "json"};

export default {
    template: `
      <assignment-list class="" :assignments="filters.inProgress" title="In Progress"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
      <assignment-create @add="add"></assignment-create>

    `,
    components: {AssignmentList, AssignmentCreate},

    data() {
        return {
            newAssignment: "",
            assignments: json
        }
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
                id: this.assignments.length + 1
            });
        }
    }
}