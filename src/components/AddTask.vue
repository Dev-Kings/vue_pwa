<template>
         <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>


    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default{
    name: 'AddTask',
    data(){
        return {
            text: '',
            day: '',
            time: '',
            reminder: false
        }
    },
    methods: {

        getDate: function () {
          return new Date().toLocaleDateString();
        },
        getTime: function () {
        return new Date().toLocaleTimeString();
        },
        onSubmit(e){
            e.preventDefault()

            if(!this.text){
            alert("Please enter a task")
            return
            }
            const newTask = {
                //id: Math.floor(Math.random() * 1000),
                text: this.text,
                day: this.getDate(),
                time: this.getTime(),
                reminder: this.reminder,
            }
            this.$emit('add-task',newTask)

            this.text = '',
            this.day = this.getDate(),
            this.time = this.getTime(),
            this.reminder = false
        }
    }
}
</script>