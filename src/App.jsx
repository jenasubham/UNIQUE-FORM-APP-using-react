import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });
  function ChangeHandler(event) {
    const { name, type, value, checked } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
      <form onSubmit={submitHandler} className="space-y-2">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Subham"
          value={formData.firstname}
          onChange={ChangeHandler}
        />

        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Jena"
          value={formData.lastname}
          onChange={ChangeHandler}
        />

        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="sjena@outlook.com"
          value={formData.email}
          onChange={ChangeHandler}
        />

        <label htmlFor="country">Country</label>
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={ChangeHandler}
        >
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Maxico">Maxico</option>
        </select>

        <label htmlFor="street">Street address</label>
        <input
          type="text"
          id="street"
          name="street"
          placeholder="1234 Lajpat Nagar"
          value={formData.street}
          onChange={ChangeHandler}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="New Delhi"
          value={formData.city}
          onChange={ChangeHandler}
        />

        <label htmlFor="city">State / Province</label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="Delhi"
          value={formData.state}
          onChange={ChangeHandler}
        />

        <label htmlFor="zip">ZIP / Postal code</label>
        <input
          type="number"
          id="zip"
          name="zip"
          placeholder="711301"
          value={formData.zip}
          onChange={ChangeHandler}
        />

        <div>
          <div>By Email</div>
          <div>
            <div>
              <div>
                <input 
                  type="checkbox" 
                  name="comments" 
                  id="comments" 
                  onChange={ChangeHandler}
                  checked={formData.comments}
                />
              </div>
              <div>
                <label htmlFor="comments">Comments</label>
                <p>Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>

            <div>
              <div>
                <input 
                  type="checkbox" 
                  name="candidates" 
                  id="candidates" 
                  onChange={ChangeHandler}
                  checked={formData.candidates}
                  />
              </div>
              <div>
                <label htmlFor="candidates">Candidates</label>
                <p>Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div>
              <div>
                <input 
                  type="checkbox" 
                  name="offers" 
                  id="offers"
                  checked={formData.offers}
                  onChange={ChangeHandler} 
                />
              </div>
              <div>
                <label htmlFor="offers">Offers</label>
                <p>Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>Push Notifications</div>
            <p>These are delivered via SMS to your mobile phone.</p>
          </div>
          <div>
            <div>
              <input 
                type="radio" 
                name="pushNotification" 
                id="pushEverything"
                value="pushEverything"
                onChange={ChangeHandler}
                checked={formData.pushNotification === "pushEverything"}
              />
              <label htmlFor="pushEverything">Everything</label>
            </div>

            <div>
              <input 
                type="radio" 
                name="pushNotification" 
                value="pushemail"
                id="pushemail"
                onChange={ChangeHandler}
                checked={formData.pushNotification ==="pushemail"} 
              />
              <label htmlFor="pushemail">Same as email</label>
            </div>

            <div>
              <input 
                type="radio" 
                name="pushNotification" 
                value="pushnothing"
                id="pushnothing"
                onChange={ChangeHandler}
                checked={formData.pushNotification ==="pushnothing"} 
              />
              <label htmlFor="pushnothing">No push notifications</label>
            </div>
            
          </div>
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default App;
