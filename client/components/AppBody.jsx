let Transition = React.addons.CSSTransitionGroup;

AppBody = React.createClass({
  getDefaultProps() {
    return {
      tabs: ["Dudes", "Chix", "Tab 3"]
    }
  },
  getInitialState() {
    return {
      modal: false
    }
  },
  setModalState(status) {
    this.setState({
      modal: status
    })
  },
  ionModal(tab, content) {
    this.setState({
      modal: (
        <IonModal modalContent={content}>
          <div className="h1 title">{tab}</div>
          <button onClick={ () => this.setState({modal:false}) } className="button button-icon active">
            <i className="icon ion-ios-close-empty"></i>
          </button>
        </IonModal>
      )
    })
  },
  render() {
    return (
      <div className="ionic-body">
        {this.state.modal ? <Backdrop /> : false}
        <Transition transitionName="modal">
          {this.state.modal}
        </Transition>
        <div className="tabs tabs-icon-top">
          {this.props.tabs.map((tab, i) => {
              return (
                <a className="tab-item" key={tab} onClick={this.ionModal.bind(null, tab)}>
                  <i className="icon ion-star"></i>
                  {tab}
                </a>
              )
            })
          }
        </div>
        <div className="bar bar-header bar-light">
          <ReactRouter.Link className="button button-icon icon ion-gear-a" to={"/settings"}></ReactRouter.Link>
          <ReactRouter.Link className="h1 title" to={"/"}>App Name</ReactRouter.Link>
          <ReactRouter.Link className="button button-icon icon ion-heart" to={"/other"}></ReactRouter.Link>
        </div>

        <div className="view">
          <div className="scroll-content ionic-scroll">
            <div className="content overflow-scroll has-header">
              <ReactRouter.RouteHandler setModalState={this.setModalState} ionModal={this.ionModal} />
            </div>
          </div>
        </div>
      </div>
    )
  }
})
