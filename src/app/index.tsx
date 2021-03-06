import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Alerts,
    Alert,
    Button,
    ButtonGroup,
    Badge,
    Label,
    Tooltip,
    Card,
    Code,
    Checkbox,
    DatePicker,
    DateInput,
    DropDown,
    Spinner,
    Toggle,
    Radio,
    RadioGroup,
    Select,
    Table,
    InputField,
    Modal,
} from 'components';

import { ClrIcon } from 'icons';

class App extends React.Component {
    state: any = {
        dropdownButtonLoading: false
    };

    $modal!: Modal;

    render() {
        return (
            <div className="main-container">
                <header className="header header-6">
                    <div className="branding">
                        <a href="https://github.com/Morglod/react-vmware-clarity" target="_blank">
                            <span className="title">React VMWare Clarity</span>
                        </a>
                    </div>
                </header>
                <nav className="subnav" />
                <div className="content-container">
                    <div className="content-area">
                        <Alerts>
                            <Alert
                                type="info"
                                text="asd"
                                actions={[]}
                                icon="dollar"
                            />
                            <Alert
                                type="danger"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                                actions={[]}
                                icon="exclamation-circle"
                            />
                            <Alert
                                type="warning"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            />
                        </Alerts>
                        <br />
                        <Button children="Primary" primary />
                        <Button children="Saving" info outline loading />
                        <Button children="Primary" primary icon="dollar" />
                        <Button children="Saving" info outline loading disabled />
                        <Button primary icon="dollar" />
                        <Button info outline >
                            Show items <Badge children={100} />
                        </Button>
                        <br />
                        <Label>
                            Items
                            <Badge>{100}</Badge>
                        </Label>
                        <br />
                        <Button outline info icon="dollar" title="Buy something" />
                        <Tooltip
                            content={(
                                <div>
                                    <Alert
                                        type="info"
                                        text="asd"
                                        actions={[]}
                                        icon="dollar"
                                    />
                                    <Button
                                        outline
                                        info
                                        children="Test"
                                    />
                                </div>
                            )}
                        >
                            <Button
                                outline
                                info
                                icon="dollar"
                            />
                        </Tooltip>
                        <br />
                        <div>Hard limit</div>
                        <ButtonGroup limit={5}>
                            <Button icon="home" children="Home" />
                            <Button icon="cog" children="Settings" />
                            <Button icon="home" children="User" />
                            <Button icon="cog" children="Cloud" />
                            <Button icon="home" children="Home" />
                            <Button icon="cog" children="Settings" />
                            <Button icon="home" children="User" />
                            <Button icon="cog" children="Cloud" />
                            <Button icon="home" children="Home" />
                            <Button icon="cog" children="Settings" />
                            <Button icon="home" children="User" />
                            <Button icon="cog" children="Cloud" />
                            <Button icon="home" children="Home" />
                            <Button icon="cog" children="Settings" />
                            <Button icon="home" children="User" />
                            <Button icon="cog" children="Cloud" />
                        </ButtonGroup>
                        <br />
                        <div>Overflow limit</div>
                        <ButtonGroup minButtonWidth={100}>
                            <Button icon="home" children="Home" />
                            <Button icon="cog" children="Settings" />
                            <Button icon="home" children="User" />
                            <Button icon="cog" children="Cloud" />
                            <Button icon="home" children="Home" />
                            <Button icon="cog" children="Settings" />
                            <Button icon="home" children="User" />
                            <Button icon="cog" children="Cloud" />
                            <Button icon="home" children="Home" />
                            <Button icon="cog" children="Settings" />
                            <Button icon="home" children="User" />
                            <Button icon="cog" children="Cloud" />
                            <Button icon="home" children="Home" />
                            <Button icon="cog" children="Settings" />
                            <Button icon="home" children="User" />
                            <Button icon="cog" children="Cloud" />
                        </ButtonGroup>
                        <br />
                        <Card
                            title="My card"
                            text="It's my card!"
                        />
                        <Code lang="css" trim>{`
                            @import url(http://fonts.googleapis.com/css?family=Questrial);
                            @import url(http://fonts.googleapis.com/css?family=Arvo);

                            @font-face {
                                src: url(http://lea.verou.me/logo.otf);
                                font-family: 'LeaVerou';
                            }

                            /*
                            Shared styles
                            */
                            
                            section h1,
                            #features li strong,
                            header h2,
                            footer p {
                                font: 100% Rockwell, Arvo, serif;
                            }
                        `}</Code>
                        <br />
                        <Checkbox>Simple checkbox</Checkbox>
                        <Checkbox value="indeterminate">Hard set to indeterminate</Checkbox>
                        <Checkbox checked disabled>Checked disabled</Checkbox>
                        <Checkbox inline>A</Checkbox>
                        <Checkbox inline defaultValue="indeterminate">B</Checkbox>
                        <br />
                        <DateInput />
                        <DateInput spaceAround />
                        <br />
                        <DropDown
                            closeOnBackdrop={!this.state.dropdownButtonLoading}
                            onItemClick={(item, itemPath) => {
                                console.log('DropDown top onItemClick', { item, itemPath });
                            }}
                            button={{
                                label: 'Dropdown',
                                className: 'btn-link',
                            }}
                            header="Dropdown header"
                            items={[
                                { label: 'Action', active: true },
                                { label: 'Disabled Link', disabled: true },
                                { divider: true },
                                { label: 'Lorem.' },
                                {
                                    label: 'Loerm ipsum',
                                    menu: {
                                        onItemClick: (item, itemPath) => {
                                            if (itemPath.endsWith('/loadButton')) {
                                                this.setState({ dropdownButtonLoading: true });
                                                return new Promise(resolve => {
                                                    setTimeout(() => {
                                                        this.setState({ dropdownButtonLoading: false });
                                                        resolve();
                                                    }, 2000);
                                                });
                                            }
                                            return;
                                        },
                                        items: [
                                            { label: 'Foo.' },
                                            {
                                                label: 'Bar.',
                                                menu: {
                                                    items: [
                                                        {
                                                            label: !this.state.dropdownButtonLoading ? 'Load something' : undefined,
                                                            key: 'loadButton',
                                                            children: this.state.dropdownButtonLoading ? (
                                                                <Spinner inline label="Loading..." />
                                                            ) : undefined
                                                        }
                                                    ]
                                                }
                                            },
                                            { label: 'Foo 2.' }
                                        ]
                                    }
                                },
                                { label: 'Ipsum.' }
                            ]}
                        />
                        <br />
                        <Spinner inline label="Loading..." />
                        <br />
                        <Toggle label="Toggles turn on and off" />
                        <Toggle label="Toggle on and disabled" value disabled />
                        <Toggle label="Toggle off and disabled" disabled />
                        <br />
                        <Toggle />
                        <Toggle defaultValue />
                        <Toggle value disabled />
                        <Toggle disabled />
                        <br />
                        <RadioGroup>
                            <Radio name="radioGroup1" label="Radio option 1" value="option1" />
                            <Radio name="radioGroup1" label="Radio option 2" value="option2" />
                            <Radio name="radioGroup1" label="Radio option 3 (disabled)" disabled value="option3" />
                        </RadioGroup>
                        <br />
                        <Select
                            onChange={values => console.log(values)}
                            options={[
                                'a', 'b', 'c', 'd'
                            ]}
                        />
                        <br />
                        <Select
                            onChange={values => console.log(values)}
                            multiple
                            options={[
                                'a', 'b', 'c', 'd'
                            ]}
                        />
                        <br />
                        <br />
                        <Table compact>
                            <thead>
                                <tr>
                                    <th>Decimal</th>
                                    <th>Hexadecimal</th>
                                    <th>Binary</th>
                                    <th>Roman Numeral</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>I</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>5</td>
                                    <td>101</td>
                                    <td>V</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>A</td>
                                    <td>1010</td>
                                    <td>X</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>F</td>
                                    <td>1111</td>
                                    <td>XV</td>
                                </tr>
                            </tbody>
                        </Table>
                        <br />
                        <form>
                            <InputField
                                label="Memory space"
                                pattern={/[0-9]{1,}/}
                                required
                                tooltip={{
                                    content: 'Allocate memory space',
                                }}
                                title="Megabytes"
                            />
                        </form>
                        <Modal
                            ref={r => this.$modal = r!}
                            title="Add datastore to host"
                            closable
                            footer={modal => (
                                <>
                                    <Button
                                        outline
                                        onClick={() => modal.close()}
                                        label="Cancel"
                                    />
                                    <Button
                                        primary
                                        onClick={() => modal.close()}
                                        label="Add"
                                    />
                                </>
                            )}
                        >
                            <p>
                                Select a host where you want your datastore to be added.
                            </p>
                            <form>
                                <section className="form-block">
                                    <Select
                                        label="Host"
                                        container="div"
                                        containerProps={{
                                            className: "form-group"
                                        }}
                                        options={[
                                            '10.11.12.13',
                                            '14.15.16.17',
                                            '18.19.20.21',
                                            '22.23.24.25'
                                        ]}
                                    />
                                </section>
                            </form>
                        </Modal>
                        <Button label="Open modal" onClick={() => this.$modal.open()} />
                    </div>
                    <nav className="sidenav" />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));