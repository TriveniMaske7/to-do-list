import React from 'react'

const List = () => {
  return (
    <section class="vh-100">
  <div class="container py-5 h-100">
      <div class="col">
        <div class="card" id="list1">
          <div class="card-body py-4 px-4 px-md-5">

            <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
              <i class="fas fa-check-square me-1"></i>
              <u>My Todo-List</u>
            </p>

            <div class="pb-2">
                  <div class="d-flex flex-row align-items-center">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                
              
            </div>

            

          </div>
        </div>
      </div>
  </div>
</section>
  )
}

export default List