import  { AxiosCtx }  from "../utils/AxiosCtx"

//const axiosAPI = AxiosCtx;

export const DashboardService = {

    getWidgets() {
        return AxiosCtx.get("/getWidgets");
    }
}; 



