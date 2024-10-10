<script context="module">
    export async function preload({ params }, { token }) {
        if (!token) {
            this.redirect(302, `/login`);
        }
    }
</script>
<script>
    import {post} from "utils.js";
    async function getMyData(){
        return await post(`auth/getMyData`).then(r => {
            r.funds = r.accounts.reduce((funds, account) => funds + account.balance, 0)
            return r
        })
    }

    async function getTransactions(){
        return await post(`auth/getTransactions`)
    }
</script>

{#if process.browser}
    {#await getMyData()}
        loading...
    {:then my}
        <section>
            <p style="font-size:xx-large">{my.name}</p>
        </section>
        <section>
            <div>Funds tulevad BackEnd-st</div>
            My funds
            <p style="font-size:xx-large; color: {my.funds >= 0 ? 'green' : 'red'}">{my.funds}</p>
        </section>
        <section>
            <ul>
                {#each my.accounts as account}
                    <li>{account.number} {account.name}</li>
                    {/each}
            </ul>
        </section>
        <section>
            {#await getTransactions()}
                Loading...
                {:then transactions}

                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>SenderName</th>
                            <th>Amount</th>
                            <th>CreateAt</th>
                            <th>Status</th>
                            <th>Sisse logitud</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each transactions as transaction}
                            <tr>
                                <td><b>{transaction.senderName}</b><br>{transaction.explanation}</td>
                                {#if transaction.amount > 0}
                                    <td class="text-success">{transaction.amount} {transaction.currency}</td>
                                {:else}
                                    <td class="text-danger">{transaction.amount} {transaction.currency}</td>
                                {/if}
                                <td>{transaction.createAt}</td>
                                <td>{transaction.status}<br>{transaction.statusDetail}</td>
                                <td>{transaction.loggedInUser}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
                <div>https://jwt.io suuname ning sisestame token phpStormist pärast Bearer andme</div>
            {/await}
        </section>
    {/await}
{/if}