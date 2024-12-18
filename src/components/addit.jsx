import React from 'react';



function Addit() {
    return (

<div className="container">
    <div clasName="row row-cols-1 row-cols-md-4 g-4">

        <div className="col">
            <div className="card border-black" style="width: 15rem;">
        <img src="{% static 'images/amzn/amznprimelogo1.jpg' %}" class="card-img-top img-fluid" style="height: 12rem;"
          alt="...">
        <div className="card-body">
          <h4 className="card-title">Amazon</h4>
          <p className="card-text"><strong>Stock Price: $193.61</strong></p>

          </p>

          <form method="POST" action="{% url 'display_selection' %}">
            {% csrf_token %}
            <input list="datalistAmzn" name="selected_item" placeholder="Choose an item...">
            <br>

            <datalist id="datalistAmzn">
              <option value="AMZN - 1 = $193.61">
              <option value="AMZN - 2 = $387.22">
              <option value="AMZN - 3 = $580.83">
              <option value="AMZN - 4 = $774.44">
              <option value="AMZN - 5 = $968.05">
              <option value="AMZN - 6 = $1,161.66">
              <option value="AMZN - 7 = $1,355.27">
              <option value="AMZN - 8 = $1,548.88">
              <option value="AMZN - 9 = $1,742.49">
              <option value="AMZN - 10 = $1,936.10">
            </datalist>
            </p>
            <br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
</div>


    </>
    );
}

export default Addit;

