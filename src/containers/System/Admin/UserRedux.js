import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllcodeService } from "../../../services/userService";
import { LANGUAGES } from "../../../utils";
class UserRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genderArr: [],
      roleArr: [],
      positionArr: [],
    };
  }

  async componentDidMount() {
    try {
      let res = await getAllcodeService("gender");
      let res_role = await getAllcodeService("ROLE");
      let res_position = await getAllcodeService("position");

      if (res_position && res_position.errCode === 0) {
        this.setState({
          positionArr: res_position.data,
        });
      }
      if (res_role && res_role.errCode === 0) {
        this.setState({
          roleArr: res_role.data,
        });
      }
      if (res && res.errCode === 0) {
        this.setState({
          genderArr: res.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let genders = this.state.genderArr;
    let language = this.props.language;
    let role = this.state.roleArr;
    let position = this.state.positionArr;
    console.log(genders);
    return (
      <React.Fragment>
        <div className="text-center title">User Redux Huy Dg Fig Bug</div>
        <div className="user-redux-body">
          <div className="container pt-5">
            <div className="row">
              <form>
                <div className="form-row row">
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">
                      <FormattedMessage id="user-redux.manager.email" />
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label for="inputPassword4">
                      <FormattedMessage id="user-redux.manager.password" />
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">
                      <FormattedMessage id="user-redux.manager.name" />
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label for="inputEmail4">
                      <FormattedMessage id="user-redux.manager.pre" />
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                </div>
                <div className="form-row row pt-2">
                  <div className="form-group col-md-3">
                    <label for="inputCity">
                      <FormattedMessage id="user-redux.manager.phone" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="form-group col-md-9">
                    <label for="inputCity">
                      <FormattedMessage id="user-redux.manager.address" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                </div>
                <div className="form-row row pt-2">
                  <div className="form-group col-md-3">
                    <label for="inputState">
                      <FormattedMessage id="user-redux.manager.gender" />
                    </label>
                    <select id="inputState" className="form-control">
                      {genders &&
                        genders.length > 0 &&
                        genders.map((item, index) => {
                          return (
                            <option key={index}>
                              {language === LANGUAGES.VI
                                ? item.valueVi
                                : item.valueEn}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label htmlFor="inputState">
                      <FormattedMessage id="user-redux.manager.position" />
                    </label>
                    <div className="input-group">
                      <select id="inputState" className="form-control">
                        {position &&
                          position.length > 0 &&
                          position.map((item, index) => {
                            return (
                              <option>
                                {language === LANGUAGES.VI
                                  ? item.valueVi
                                  : item.valueEn}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>

                  <div className="form-group col-md-3">
                    <label for="inputState">
                      <FormattedMessage id="user-redux.manager.role" />
                    </label>
                    <select id="inputState" className="form-control">
                      {role &&
                        role.length > 0 &&
                        role.map((item, index) => {
                          return (
                            <option key={index}>
                              {language === LANGUAGES.VI
                                ? item.valueVi
                                : item.valueEn}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="form-group col-md-3">
                    <label for="inputCity">
                      <FormattedMessage id="user-redux.manager.image" />
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                </div>

                <div className="form-row pt-3">
                  <button
                    type="submit"
                    className="btn btn-primary p-3 d-flex justify-content-center align-items-center"
                  >
                    <FormattedMessage id="user-redux.manager.save" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
