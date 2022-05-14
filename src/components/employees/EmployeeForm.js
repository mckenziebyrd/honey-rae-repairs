import React, {useState} from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {

    const [employee, change] = useState({
        name: "",
        specialty: ""
    })

    const history = useHistory()

    const hireEmployee = (evt) => {
        evt.preventDefault()

        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form>
            <h2>New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                change(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Technical specialty"
                         />
                </div>
            </fieldset>
            <button 
            onClick={hireEmployee}
             className="btn btn-primary">
                Hire Employee
            </button>
        </form>
    )
}