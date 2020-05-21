export class users{
    id:string;
    first_name:string;
    last_name:string;
    user_name:string;
    email:string;
    role_id:string;
    is_active:string;
    store_id:string;
    phone:string;
    login_time:string;
    logout_time:string;
    joining_date:string;
    experience:string;
    salary:string;
    employee_id:string;
    address:string;
    emergency_contact:string;
    photo:string;
    created_at:string;
    updated_at:string;
    role:role[];
}

export class role{
    id:string;
    role:string;
    created_at:string;
    updated_at:string;

}