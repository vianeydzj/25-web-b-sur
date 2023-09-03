const Blog = () => {
  return (
    <>
      <form class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            required
          ></input>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">
            Apedillo
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            required
          ></input>
        </div>
        <div class="col-md-4">
          <label for="validationDefaultUsername" class="form-label">
            Nombre de usuario
          </label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input
              type="text"
              class="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              required
            ></input>
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationDefault03" class="form-label">
            Dirección
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault03"
            required
          ></input>
        </div>
        <div class="col-md-3">
          <label for="validationDefault05" class="form-label">
            Estado
          </label>
          <input
            type="text"
            class="form-control"
            id="validationDefault05"
            required
          ></input>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            ></input>
            <label class="form-check-label" for="invalidCheck2">
              Estoy de acuerdo con las condiciones.
            </label>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
};

export default Blog;
