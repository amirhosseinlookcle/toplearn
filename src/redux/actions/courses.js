import { getCourses } from "../../services/courseServices"

export const getAllCourses = () => {
    return async (dispatch, getState) => {
        const {data} = await getCourses();
        // console.log(data)
        await dispatch({ type: "INIT", payload: data.courses})
    }
}