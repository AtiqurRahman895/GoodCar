import Select from "react-select";

const MultiSelectOptions = ({setServices,services}) => {

    const ServiceNameList=[
        { value: 'Transmission Repair & Service', label: 'Transmission Repair & Service' },
        { value: 'Break Repair & Service', label: 'Break Repair & Service' },
        { value: 'Engine Repair & Service', label: 'Engine Repair & Service' },
        { value: 'Tyre & Wheels Repair', label: 'Tyre & Wheels Repair' },
        { value: 'Painting & Denting Repair', label: 'Painting & Denting Repair' },
        { value: 'Air Conditioner Repair & Service', label: 'Air Conditioner Repair & Service' },
        { value: 'General Auto Repair & Maintenance', label: 'General Auto Repair & Maintenance' },
        { value: 'Transmission Repair & Replacement', label: 'Transmission Repair & Replacement' },
        { value: 'Tire Repair and Replacement', label: 'Tire Repair and Replacement' },
        { value: 'State Emissions Inspection', label: 'State Emissions Inspection' },
        { value: 'Break Job / Break Services', label: 'Break Job / Break Services' },
        { value: 'Electrical Diagnostics', label: 'Electrical Diagnostics' },
        { value: 'Fuel System Repairs', label: 'Fuel System Repairs' },
        { value: 'Starting and Charging Repair', label: 'Starting and Charging Repair' },
        { value: 'Steering and Suspension Work', label: 'Steering and Suspension Work' },
        { value: 'Emission Repair Facility', label: 'Emission Repair Facility' },
        { value: 'Wheel Alignment', label: 'Wheel Alignment' },
        { value: 'Computer Diagaonstic Testing', label: 'Computer Diagaonstic Testing' },
        { value: 'Fuel System Repair', label: 'Fuel System Repair' },
        { value: 'Exhaust System Repair', label: 'Exhaust System Repair' },

    ]

    return(
        <div className="flex-1">
            <label htmlFor="services" className="label w-fit">
                <span className="">Services</span>
            </label>
            <Select name="services" onChange={(selectedOptions)=>setServices(selectedOptions)} value={services} placeholder={'Pick Services...'} id="services" options={ServiceNameList} isSearchable isMulti required  styles={{
                container:(base,state)=>({
                    ...base,
                    color:"white",
                    border:state.isFocused||state.menuIsOpen?"white":"#353535",
                    outline:state.isFocused||state.menuIsOpen?"none":"none",
                }),
                control:(base,state)=>({
                    ...base,
                    color:"white",
                    backgroundColor:"transparent",
                    paddingBlock:"0.4rem",
                    border:state.isFocused||state.menuIsOpen?"1px solid white":"1px solid #353535",
                    borderRadius:"7px",
                    outline:state.isFocused||state.menuIsOpen?"none":"none",
                    "&:hover": {
                        border: "1px solid white", // Change border color on hover
                        boxShadow:"none"
                    },
                }),
                
                input:(base)=>({
                    ...base,
                    color:"white",

                }),
                placeholder:(base)=>({
                    ...base,
                    color:"white",
                    fontSize:"14px",
                }),
                indicatorsContainer:(base,state)=>({
                    ...base,
                    color:state.isFocused&&"white",
                    fontSize: "14px",
                }),
                multiValue:(base)=>({
                    ...base,
                    color:"black",
                    backgroundColor:"white",
                }),
                menu:(base)=>({
                    ...base,
                    backgroundColor:"white",
                    color:"black",
                    // outline:state.menuIsOpen?"white":"#353535",
                }),
                option:(base,state)=>({
                    ...base,
                    backgroundColor:state.isFocused||state.isSelected?"#faced5":"transparent",
                    color:state.isSelected?"black":'black',
                }),
            }}>
                
            </Select>
        </div>
    )


};

export default MultiSelectOptions;