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

        return await post(`auth/getMyData`)
    }

    async function getTransactions(){

        return await post(`auth/getTransactions`).then(r => {
            r.funds = r.accounts.reduce((funds, account) => funds + account.balance, 0)
            return r
        })
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
            My funds
            <p style="font-size:xx-large; color: {my.funds >= 0 ? 'green' : 'red'}">{my.funds}</p>
        </section>
        <section>
            <ul>
                {#each my.accounts as account}
                    <li>{account.number} (account.name)</li>
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
                        </tr>
                    </thead>
                    <tbody>
                        {#each transactions as transaction}
                            <tr>
                                <td><br>{transaction.senderName}<br>{transaction.explanation}</td>
                                <td style="color: {transaction.amount >= 0 ?'green' : 'red'}}">{transaction.amount} {transaction.currency}</td>
                                <td>{transaction.createAt}</td>
                                <td>{transaction.status}<br>{transaction.statusDetail}</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>

            {/await}
        </section>
    {/await}
{/if}